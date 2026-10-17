export type EvidenceCategory = 'All Evidence' | 'Video Clips' | 'Snapshots' | 'Audio Recordings' | 'Incident Exports'
export type EvidenceKind = 'VIDEO' | 'SNAPSHOT' | 'AUDIO' | 'EXPORT'
export type CustodyEvent = { label: string; detail: string; time: string; icon: string }
export type EvidenceRecord = { id: string; title: string; kind: EvidenceKind; category: Exclude<EvidenceCategory, 'All Evidence'>; camera: string; site: string; location: string; incidentId: string; capturedAt: string; duration: string; fileSize: string; resolution: string; format: string; retentionDays: number; image: string; custody: CustodyEvent[] }

export const evidenceCategories: { label: EvidenceCategory; count: number; icon: string }[] = [
  { label: 'All Evidence', count: 1248, icon: 'Library' },
  { label: 'Video Clips', count: 864, icon: 'Video' },
  { label: 'Snapshots', count: 256, icon: 'Image' },
  { label: 'Audio Recordings', count: 48, icon: 'Mic2' },
  { label: 'Incident Exports', count: 80, icon: 'FileArchive' },
]

export const evidenceFolders = [
  { label: 'Global Operations', count: 0, icon: 'FolderOpen', children: [{ label: 'North Region', count: 456 }, { label: 'South Region', count: 312 }, { label: 'East Region', count: 198 }, { label: 'West Region', count: 164 }] },
  { label: 'Corporate HQ', count: 68, icon: 'Folder' },
  { label: 'External Shares', count: 50, icon: 'Folder' },
  { label: 'Archived', count: 0, icon: 'Archive' },
]

const images = [
  'https://images.pexels.com/photos/13388407/pexels-photo-13388407.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/16300099/pexels-photo-16300099.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/12997201/pexels-photo-12997201.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/13397079/pexels-photo-13397079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/11145684/pexels-photo-11145684.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/6064902/pexels-photo-6064902.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
]

const templates: Omit<EvidenceRecord, 'id' | 'capturedAt' | 'custody'>[] = [
  { title: 'Parking Lot — Camera 07', kind: 'VIDEO', category: 'Video Clips', camera: 'North Entrance · Camera 07', site: 'Building A', location: 'Parking Lot', incidentId: 'INC-2024-0891', duration: '01:24', fileSize: '48.7 MB', resolution: '1920 × 1080', format: 'MP4', retentionDays: 89, image: images[0] },
  { title: 'Perimeter Breach — Shot 12', kind: 'SNAPSHOT', category: 'Snapshots', camera: 'North Gate · Camera 03', site: 'North Gate', location: 'North Perimeter', incidentId: 'INC-2024-0891', duration: '—', fileSize: '4.2 MB', resolution: '3840 × 2160', format: 'JPG', retentionDays: 89, image: images[1] },
  { title: 'Loading Dock — Camera 02', kind: 'VIDEO', category: 'Video Clips', camera: 'Loading Bay · Camera 02', site: 'Building A', location: 'Loading Dock', incidentId: 'INC-2024-0887', duration: '03:46', fileSize: '96.3 MB', resolution: '1920 × 1080', format: 'MP4', retentionDays: 89, image: images[2] },
  { title: 'Lobby — Camera 01', kind: 'SNAPSHOT', category: 'Snapshots', camera: 'Main Lobby · Camera 01', site: 'Corporate HQ', location: 'Main Lobby', incidentId: 'INC-2024-0883', duration: '—', fileSize: '3.8 MB', resolution: '2560 × 1440', format: 'PNG', retentionDays: 87, image: images[3] },
  { title: 'South Entrance — Camera 05', kind: 'VIDEO', category: 'Video Clips', camera: 'South Gate · Camera 05', site: 'South Gate', location: 'South Entrance', incidentId: 'INC-2024-0881', duration: '02:15', fileSize: '61.4 MB', resolution: '1920 × 1080', format: 'MP4', retentionDays: 12, image: images[4] },
  { title: 'Vehicle Capture — Front', kind: 'SNAPSHOT', category: 'Snapshots', camera: 'Parking Lot · LPR Camera 01', site: 'Parking Lot A', location: 'Vehicle Checkpoint', incidentId: 'INC-2024-0879', duration: '—', fileSize: '2.9 MB', resolution: '3840 × 2160', format: 'JPG', retentionDays: 11, image: images[0] },
  { title: 'Operator Radio — Channel 2', kind: 'AUDIO', category: 'Audio Recordings', camera: 'Security Radio · Channel 2', site: 'Global Operations', location: 'Operations Floor', incidentId: 'INC-2024-0876', duration: '04:18', fileSize: '8.4 MB', resolution: 'Audio', format: 'WAV', retentionDays: 30, image: images[5] },
  { title: 'Incident Review Export — 0874', kind: 'EXPORT', category: 'Incident Exports', camera: 'Evidence bundle', site: 'West Region', location: 'West Perimeter', incidentId: 'INC-2024-0874', duration: '08:22', fileSize: '212 MB', resolution: '1920 × 1080', format: 'ZIP', retentionDays: 42, image: images[1] },
]

const makeCustody = (): CustodyEvent[] => [
  { label: 'Captured', detail: 'Camera 07', time: 'May 22, 2024 · 09:14 AM', icon: 'Camera' },
  { label: 'Transferred', detail: 'System to Vault', time: 'May 22, 2024 · 09:15 AM', icon: 'UploadCloud' },
  { label: 'Accessed', detail: 'Admin User', time: 'May 22, 2024 · 10:02 AM', icon: 'Eye' },
  { label: 'Shared', detail: 'Shared with 2 users', time: 'May 22, 2024 · 11:18 AM', icon: 'Share2' },
  { label: 'Exported', detail: 'Exported by Admin User', time: 'May 22, 2024 · 11:45 AM', icon: 'Download' },
]

export const evidenceRecords: EvidenceRecord[] = Array.from({ length: 4 }, (_, page) => templates.map((template, index) => { const recordIndex = page * templates.length + index; return { ...template, id: `EVD-2024-${String(8901 - recordIndex).padStart(4, '0')}`, capturedAt: `May ${22 - (recordIndex % 3)}, 2024 · ${String(9 + (recordIndex % 8)).padStart(2, '0')}:${String(14 - (recordIndex % 6) * 2).padStart(2, '0')} ${recordIndex % 3 === 0 ? 'AM' : 'PM'}`, custody: makeCustody() } })).flat()
