export type AnalyticsPoint = { label: string; total: number; critical: number; active: number; resolved: number; threat: number }
export type SitePerformance = { site: string; cameras: number; uptime: string; incidents: number; trend: number[] }

export const analyticsPoints: AnalyticsPoint[] = [
  { label: 'May 16', total: 150, critical: 72, active: 40, resolved: 27, threat: 74 },
  { label: 'May 17', total: 112, critical: 58, active: 35, resolved: 23, threat: 69 },
  { label: 'May 18', total: 148, critical: 91, active: 43, resolved: 25, threat: 77 },
  { label: 'May 19', total: 171, critical: 55, active: 21, resolved: 20, threat: 71 },
  { label: 'May 20', total: 129, critical: 62, active: 14, resolved: 31, threat: 68 },
  { label: 'May 21', total: 170, critical: 73, active: 43, resolved: 28, threat: 76 },
  { label: 'May 22', total: 134, critical: 74, active: 37, resolved: 23, threat: 72 },
]

export const categoryBreakdown = [
  { label: 'Perimeter Breach', count: 118, color: '#0eaaa8' },
  { label: 'Loitering', count: 69, color: '#45c1bf' },
  { label: 'Vehicle Detection', count: 56, color: '#102a61' },
  { label: 'Unauthorized Access', count: 37, color: '#ec773b' },
  { label: 'Suspicious Activity', count: 22, color: '#4789c4' },
  { label: 'Other', count: 10, color: '#a5c8ee' },
]

export const sitePerformance: SitePerformance[] = [
  { site: 'North Entrance', cameras: 32, uptime: '99.2%', incidents: 48, trend: [4, 7, 5, 9, 8, 12] },
  { site: 'Parking Lot B', cameras: 28, uptime: '98.1%', incidents: 36, trend: [8, 6, 10, 8, 13, 11] },
  { site: 'Main Building', cameras: 24, uptime: '97.8%', incidents: 29, trend: [5, 6, 4, 8, 6, 9] },
  { site: 'South Gate', cameras: 20, uptime: '99.5%', incidents: 22, trend: [3, 5, 4, 7, 6, 8] },
  { site: 'Warehouse Area', cameras: 24, uptime: '97.2%', incidents: 18, trend: [7, 4, 6, 5, 4, 6] },
]

export const alertSources = [
  { label: 'Perimeter Cameras', count: 128, color: '#0da8a8' },
  { label: 'Parking Lot Cameras', count: 96, color: '#26b5b4' },
  { label: 'Entrance Cameras', count: 48, color: '#48c2bf' },
  { label: 'Warehouse Cameras', count: 24, color: '#68cbc6' },
  { label: 'Other Devices', count: 16, color: '#8fd7d1' },
]

export const reports = [
  { name: 'Weekly Security Summary', description: 'Overview of incidents and system performance', format: 'PDF', generated: 'May 22, 2024 · 8:00 AM' },
  { name: 'Incident Detail Report', description: 'Detailed breakdown of all incidents', format: 'CSV', generated: 'May 22, 2024 · 8:00 AM' },
  { name: 'Camera Health Report', description: 'Camera status and uptime analysis', format: 'PDF', generated: 'May 22, 2024 · 8:00 AM' },
  { name: 'Alert Summary Report', description: 'Alert trends and resolution metrics', format: 'CSV', generated: 'May 22, 2024 · 8:00 AM' },
]

export const contributingFactors = [
  { label: 'Perimeter breach attempts', value: '34%', icon: 'ShieldAlert' },
  { label: 'Unusual motion patterns', value: '22%', icon: 'Activity' },
  { label: 'Loitering events', value: '18%', icon: 'Footprints' },
]
