import { cameraSources } from './mock-data'

export type IncidentSeverity = 'High' | 'Medium' | 'Low'
export type IncidentStatus = 'New' | 'Acknowledged' | 'In Progress' | 'Investigating' | 'Resolved' | 'False Positive'
export type IncidentActivity = { id: string; label: string; actor: string; time: string; tone: 'system' | 'assigned' | 'active' | 'complete' }
export type IncidentRecord = { id: string; type: string; site: string; location: string; severity: IncidentSeverity; status: IncidentStatus; assignedTo: string; detectedAt: string; description: string; riskScore: number; cameraId: string; cameraName: string; activity: IncidentActivity[] }

export const incidentTypes = ['Perimeter Breach', 'Loitering Detected', 'Unauthorized Access', 'Vehicle Without Authorization', 'Suspicious Activity', 'Tailgating Detected', 'Camera Tampering', 'License Plate Alert', 'Intrusion Detected']
export const incidentSites = ['North Gate', 'Parking Lot B', 'East Entrance', 'South Gate', 'Loading Dock', 'Main Lobby', 'Building C', 'North Entrance', 'Warehouse 3']
export const responders = ['Sarah Johnson', 'Michael Chen', 'David Patel', 'Emily Rodriguez', 'James Wilson']
export const incidentCameras = cameraSources.slice(0, 9)

const templates: Omit<IncidentRecord, 'id' | 'detectedAt' | 'activity'>[] = [
  { type: 'Perimeter Breach', site: 'North Gate', location: 'Building A - North Perimeter', severity: 'High', status: 'In Progress', assignedTo: 'Sarah Johnson', description: 'Perimeter breach detected at the main north gate. Individual activity was flagged by the analytics model and is awaiting final review.', riskScore: 92, cameraId: 'SRC-001', cameraName: 'North Gate - Camera 01' },
  { type: 'Loitering Detected', site: 'Parking Lot B', location: 'Southwest Parking Row', severity: 'Medium', status: 'New', assignedTo: 'Michael Chen', description: 'Extended dwell time detected near the southwest parking row. No access attempt has been confirmed.', riskScore: 62, cameraId: 'SRC-003', cameraName: 'Parking Lot B - Camera 03' },
  { type: 'Unauthorized Access', site: 'East Entrance', location: 'East Entrance Turnstiles', severity: 'High', status: 'Investigating', assignedTo: 'David Patel', description: 'Access attempt was recorded outside the authorized schedule at the east entrance turnstiles.', riskScore: 86, cameraId: 'SRC-002', cameraName: 'East Entrance - PTZ Dome' },
  { type: 'Vehicle Without Authorization', site: 'South Gate', location: 'South Gate Approach', severity: 'Medium', status: 'Investigating', assignedTo: 'Emily Rodriguez', description: 'A vehicle approached the south gate without a matching authorization record.', riskScore: 68, cameraId: 'SRC-003', cameraName: 'South Gate - Camera 03' },
  { type: 'Suspicious Activity', site: 'Loading Dock', location: 'Loading Dock 2', severity: 'Low', status: 'New', assignedTo: 'James Wilson', description: 'Unusual movement was detected near the loading dock during a low-traffic period.', riskScore: 41, cameraId: 'SRC-004', cameraName: 'Loading Dock - Camera 04' },
  { type: 'Perimeter Breach', site: 'West Perimeter', location: 'West Fence Line', severity: 'High', status: 'In Progress', assignedTo: 'Sarah Johnson', description: 'Fence-line movement triggered a perimeter rule near the west perimeter.', riskScore: 88, cameraId: 'SRC-009', cameraName: 'West Perimeter - Camera 09' },
  { type: 'Tailgating Detected', site: 'Main Lobby', location: 'Visitor Turnstile 2', severity: 'Medium', status: 'In Progress', assignedTo: 'Michael Chen', description: 'Two individuals passed through a controlled turnstile during a single credential cycle.', riskScore: 71, cameraId: 'SRC-002', cameraName: 'Main Lobby - PTZ Dome' },
  { type: 'Camera Tampering', site: 'Building C', location: 'Building C - Cam 12', severity: 'High', status: 'Investigating', assignedTo: 'David Patel', description: 'The camera angle changed unexpectedly and the feed was briefly obstructed.', riskScore: 79, cameraId: 'SRC-005', cameraName: 'Building C - Camera 12' },
  { type: 'License Plate Alert', site: 'North Entrance', location: 'Vehicle Checkpoint', severity: 'Low', status: 'Resolved', assignedTo: 'Emily Rodriguez', description: 'A license plate matched a demonstration watchlist rule and was cleared after review.', riskScore: 29, cameraId: 'SRC-001', cameraName: 'North Entrance - Camera 01' },
  { type: 'Intrusion Detected', site: 'Warehouse 3', location: 'Warehouse 3 - Rear Door', severity: 'High', status: 'In Progress', assignedTo: 'James Wilson', description: 'Door-zone motion was detected after scheduled hours near the rear warehouse door.', riskScore: 95, cameraId: 'SRC-006', cameraName: 'Warehouse 3 - Camera 06' },
]

const activityFor = (item: Omit<IncidentRecord, 'id' | 'detectedAt' | 'activity'>, index: number): IncidentActivity[] => [
  { id: `activity-${index}-1`, label: 'Incident created', actor: 'System', time: 'May 22, 2024 09:41 AM', tone: 'system' },
  { id: `activity-${index}-2`, label: `Assigned to ${item.assignedTo}`, actor: 'System', time: 'May 22, 2024 09:42 AM', tone: 'assigned' },
  ...(item.status !== 'New' ? [{ id: `activity-${index}-3`, label: item.status === 'Resolved' ? 'Incident resolved' : 'Investigation started', actor: item.assignedTo, time: 'May 22, 2024 09:45 AM', tone: item.status === 'Resolved' ? 'complete' as const : 'active' as const }] : []),
]

export const incidentRecords: IncidentRecord[] = Array.from({ length: 4 }, (_, page) => templates.map((template, index) => { const recordIndex = page * templates.length + index; const minute = String(41 - (recordIndex % 10) * 3).padStart(2, '0'); return { ...template, id: `INC-2024-${String(789 - recordIndex).padStart(4, '0')}`, detectedAt: `May 22, 2024 09:${minute} AM`, activity: activityFor(template, recordIndex) } })).flat()
