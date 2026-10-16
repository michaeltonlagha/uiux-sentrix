export type AlertSeverity = 'High' | 'Medium' | 'Low'

export const navItems = [
  ['Dashboard', 'LayoutDashboard'], ['Live Monitoring', 'MonitorPlay'], ['Incidents', 'Siren'], ['Camera Sources', 'Video'], ['Facility Map', 'MapPinned'], ['Devices', 'HardDrive'], 
  ['AI Analytics', 'Waypoints'], ['Alerts', 'BellRing'], ['Reports', 'FileBarChart'], ['Sites', 'Building2'],
  ['Users & Access', 'UsersRound'], ['System Settings', 'Settings2'],
] as const

export const stats = [
  { label: 'Total Cameras', value: '128', change: '12', direction: 'up', icon: 'Video', tone: 'teal', spark: 'M2 29 C12 27, 13 19, 22 23 S32 14, 41 17 S51 8, 60 11' },
  { label: 'Active Alerts', value: '24', change: '8', direction: 'up', icon: 'ShieldCheck', tone: 'teal', spark: 'M2 31 C12 30, 14 24, 22 25 S31 15, 39 19 S48 9, 60 12' },
  { label: 'System Uptime', value: '98.7%', change: '0.6%', direction: 'up', icon: 'BadgeCheck', tone: 'navy', spark: 'M2 30 C12 28, 17 21, 25 24 S32 15, 41 18 S52 9, 60 12' },
  { label: 'Monitored Sites', value: '16', change: '2', direction: 'up', icon: 'UsersRound', tone: 'aqua', spark: 'M2 30 C12 26, 14 28, 21 22 S30 24, 38 16 S48 20, 60 11' },
  { label: 'Incidents (30D)', value: '312', change: '18', direction: 'up', icon: 'FileText', tone: 'slate', spark: 'M2 30 C12 30, 15 26, 22 27 S30 18, 38 20 S48 11, 60 13' },
] as const

export const alerts = [
  { title: 'Perimeter Breach', location: 'North Gate - Building A', severity: 'High' as AlertSeverity, time: '2 min ago', icon: 'BellRing' },
  { title: 'Loitering Detected', location: 'Parking Lot B', severity: 'Medium' as AlertSeverity, time: '5 min ago', icon: 'BellRing' },
  { title: 'Vehicle Without Authorization', location: 'East Entrance', severity: 'Medium' as AlertSeverity, time: '8 min ago', icon: 'CarFront' },
  { title: 'AI Model Performance Warning', location: 'Camera Zone 7', severity: 'Low' as AlertSeverity, time: '15 min ago', icon: 'Info' },
]

export const incidents = [
  ['INC-2024-1021', 'Perimeter Breach', 'Building A', 'May 22, 2024 09:14 AM', 'High', 'Investigating'],
  ['INC-2024-1020', 'Loitering', 'Parking Lot B', 'May 22, 2024 09:08 AM', 'Medium', 'New'],
  ['INC-2024-1019', 'Unauthorized Access', 'East Entrance', 'May 22, 2024 08:56 AM', 'High', 'Investigating'],
  ['INC-2024-1018', 'Vehicle Without Auth', 'South Gate', 'May 22, 2024 08:42 AM', 'Medium', 'Resolved'],
  ['INC-2024-1017', 'Suspicious Activity', 'Loading Dock', 'May 22, 2024 08:31 AM', 'Low', 'Resolved'],
] as const

export const insights = [
  ['ShieldCheck', 'Perimeter breaches increased', '18% in the last 7 days.'],
  ['Waypoints', 'AI detections prevented', '24 potential incidents.'],
  ['UsersRound', 'All sites are compliant', 'with security policies.'],
] as const

export type CameraSourceStatus = 'Online' | 'Maintenance' | 'Offline'
export type CameraSourceType = 'IP Camera' | 'CCTV' | 'RTSP' | 'Mobile Camera' | 'Dashcam' | 'Smart Glasses' | 'Uploaded Video' | 'External CCTV'

export type CameraSource = {
  id: string
  name: string
  identifier: string
  type: CameraSourceType
  site: string
  location: string
  status: CameraSourceStatus
  connection: 'Excellent' | 'Good' | 'Fair' | 'N/A'
  health: number | null
  healthLabel: 'Healthy' | 'Warning' | 'Stored' | 'N/A'
  tags: string[]
  thumb: string
}

const featuredSources: CameraSource[] = [
  { id: 'SRC-001', name: 'North Entrance - Cam 01', identifier: '192.168.1.101', type: 'IP Camera', site: 'North Gate', location: 'Building A', status: 'Online', connection: 'Excellent', health: 98, healthLabel: 'Healthy', tags: ['Entrance', 'Outdoor', '+2'], thumb: 'entrance' },
  { id: 'SRC-002', name: 'Lobby - PTZ Dome', identifier: '192.168.1.102', type: 'IP Camera', site: 'Main Lobby', location: 'Building A', status: 'Online', connection: 'Good', health: 92, healthLabel: 'Healthy', tags: ['Lobby', 'Indoor'], thumb: 'lobby' },
  { id: 'SRC-003', name: 'Parking Lot A - Cam 03', identifier: '192.168.1.103', type: 'CCTV', site: 'Parking Lot A', location: 'Campus', status: 'Online', connection: 'Fair', health: 78, healthLabel: 'Warning', tags: ['Parking', 'Outdoor', '+1'], thumb: 'parking' },
  { id: 'SRC-004', name: 'Elevator 2 - Inside', identifier: 'rtsp://10.0.0.2:554/stream', type: 'RTSP', site: 'Elevator Bank', location: 'Building A', status: 'Online', connection: 'Excellent', health: 95, healthLabel: 'Healthy', tags: ['Elevator'], thumb: 'elevator' },
  { id: 'SRC-005', name: 'Mobile Unit - Cam 01', identifier: 'iPhone 14 Pro', type: 'Mobile Camera', site: 'Patrol Unit 7', location: 'Field', status: 'Online', connection: 'Good', health: 90, healthLabel: 'Healthy', tags: ['Mobile', 'Patrol'], thumb: 'mobile' },
  { id: 'SRC-006', name: 'Patrol Car - Dashcam', identifier: 'SN-DASH-7821', type: 'Dashcam', site: 'Patrol Car 12', location: 'Field', status: 'Online', connection: 'Excellent', health: 93, healthLabel: 'Healthy', tags: ['Vehicle', 'Patrol'], thumb: 'dashcam' },
  { id: 'SRC-007', name: 'Guard Glasses - Unit 4', identifier: 'SN-GLS-4004', type: 'Smart Glasses', site: 'Security Team', location: 'Field', status: 'Maintenance', connection: 'Good', health: null, healthLabel: 'N/A', tags: ['Wearable', 'Security'], thumb: 'glasses' },
  { id: 'SRC-008', name: 'Incident Clip - 05.21', identifier: 'video_2024_05_21.mp4', type: 'Uploaded Video', site: 'Evidence Library', location: 'Archive', status: 'Online', connection: 'N/A', health: null, healthLabel: 'Stored', tags: ['Evidence', 'Archive'], thumb: 'video' },
  { id: 'SRC-009', name: 'External CCTV - West Wing', identifier: '10.10.50.5', type: 'External CCTV', site: 'West Wing', location: 'Building B', status: 'Online', connection: 'Excellent', health: 88, healthLabel: 'Healthy', tags: ['External', 'Building B'], thumb: 'west' },
]

export const cameraSources: CameraSource[] = Array.from({ length: 4 }, (_, page) => featuredSources.map((source, index) => page === 0 ? source : ({ ...source, id: `SRC-${String(page * 9 + index + 1).padStart(3, '0')}`, name: `${source.name} ${page + 1}`, identifier: source.identifier }))).flat()

export const cameraSourceTypes = [
  { type: 'IP Camera' as CameraSourceType, icon: 'CloudCog', description: 'Add an IP camera via direct network connection.' },
  { type: 'CCTV' as CameraSourceType, icon: 'Cctv', title: 'CCTV / Analog Camera', description: 'Add a traditional CCTV or analog camera.' },
  { type: 'RTSP' as CameraSourceType, icon: 'RadioTower', description: 'Add a camera using an RTSP stream URL.' },
  { type: 'Mobile Camera' as CameraSourceType, icon: 'Smartphone', description: 'Connect a mobile device camera.' },
  { type: 'Dashcam' as CameraSourceType, icon: 'CarFront', description: 'Add a vehicle dashcam for monitoring.' },
  { type: 'Smart Glasses' as CameraSourceType, icon: 'Glasses', description: 'Connect smart glasses for live streaming.' },
  { type: 'Uploaded Video' as CameraSourceType, icon: 'FileVideo2', description: 'Upload video files for review and analysis.' },
  { type: 'External CCTV' as CameraSourceType, icon: 'Network', title: 'External CCTV System', description: 'Integrate with an external CCTV system.' },
]
