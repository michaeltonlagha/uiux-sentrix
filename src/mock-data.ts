export type AlertSeverity = 'High' | 'Medium' | 'Low'

export const navItems = [
  ['Dashboard', 'LayoutDashboard'], ['Live Monitoring', 'MonitorPlay'], ['Incidents', 'Siren'], ['Devices', 'Video'],
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
