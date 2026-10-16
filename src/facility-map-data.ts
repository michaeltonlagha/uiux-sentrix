import { cameraSources, type CameraSource } from './mock-data'

export type FacilityZone = {
  id: string
  name: string
  cameraCount: number
  status: 'Secure' | 'Attention' | 'Monitoring'
  fill: string
  stroke: string
  points: string
  labelX: number
  labelY: number
}

export type FacilityCamera = {
  id: string
  source: CameraSource
  x: number
  y: number
  status: 'Online' | 'Idle' | 'Offline'
  zone: string
}

export type FacilityAlert = {
  id: string
  title: string
  location: string
  severity: 'High' | 'Medium' | 'Low' | 'Cleared'
  time: string
  x: number
  y: number
  zone: string
  icon: string
}

export const facilityZones: FacilityZone[] = [
  { id: 'building-a', name: 'Building A', cameraCount: 24, status: 'Secure', fill: '#bfe8e7', stroke: '#0b9ea5', points: '300,130 390,130 390,110 440,110 440,128 525,128 525,145 575,145 575,185 605,185 605,245 565,245 565,285 500,285 500,305 420,305 420,292 350,292 350,270 300,270 300,230 278,230 278,175 300,175', labelX: 430, labelY: 205 },
  { id: 'building-b', name: 'Building B', cameraCount: 20, status: 'Secure', fill: '#c7d9ef', stroke: '#347bc4', points: '145,220 205,220 205,240 250,240 250,280 275,280 275,345 250,345 250,380 205,380 205,400 145,400 145,378 110,378 110,335 92,335 92,280 115,280 115,245 145,245', labelX: 181, labelY: 315 },
  { id: 'building-c', name: 'Building C', cameraCount: 18, status: 'Secure', fill: '#bde3e3', stroke: '#1699a5', points: '650,235 700,235 700,215 775,215 775,230 830,230 830,258 875,258 875,315 857,315 857,360 820,360 820,382 745,382 745,365 685,365 685,345 640,345 640,300 620,300 620,260 650,260', labelX: 755, labelY: 300 },
  { id: 'building-d', name: 'Building D', cameraCount: 16, status: 'Secure', fill: '#c6ecea', stroke: '#11a4a6', points: '205,390 260,390 260,370 325,370 325,390 380,390 380,430 410,430 410,485 375,485 375,520 315,520 315,535 245,535 245,510 190,510 190,475 165,475 165,425 205,425', labelX: 288, labelY: 455 },
  { id: 'building-e', name: 'Building E', cameraCount: 12, status: 'Attention', fill: '#f8d99e', stroke: '#e49524', points: '520,390 575,390 575,370 640,370 640,395 690,395 690,430 720,430 720,485 690,485 690,515 625,515 625,532 555,532 555,512 510,512 510,480 485,480 485,430 520,430', labelX: 605, labelY: 452 },
]

const source = (id: string) => cameraSources.find(camera => camera.id === id) ?? cameraSources[0]

export const facilityCameras: FacilityCamera[] = [
  { id: 'fac-cam-01', source: source('SRC-001'), x: 220, y: 112, status: 'Online', zone: 'building-a' },
  { id: 'fac-cam-02', source: source('SRC-002'), x: 585, y: 108, status: 'Online', zone: 'building-a' },
  { id: 'fac-cam-03', source: source('SRC-003'), x: 140, y: 240, status: 'Idle', zone: 'building-b' },
  { id: 'fac-cam-04', source: source('SRC-004'), x: 94, y: 350, status: 'Online', zone: 'building-b' },
  { id: 'fac-cam-05', source: source('SRC-005'), x: 370, y: 362, status: 'Online', zone: 'building-d' },
  { id: 'fac-cam-06', source: source('SRC-006'), x: 457, y: 320, status: 'Online', zone: 'parking' },
  { id: 'fac-cam-07', source: source('SRC-007'), x: 735, y: 405, status: 'Idle', zone: 'building-c' },
  { id: 'fac-cam-08', source: source('SRC-008'), x: 820, y: 490, status: 'Offline', zone: 'parking' },
  { id: 'fac-cam-09', source: source('SRC-009'), x: 900, y: 300, status: 'Online', zone: 'building-c' },
  { id: 'fac-cam-10', source: source('SRC-001'), x: 210, y: 545, status: 'Online', zone: 'building-d' },
  { id: 'fac-cam-11', source: source('SRC-003'), x: 690, y: 550, status: 'Online', zone: 'building-e' },
  { id: 'fac-cam-12', source: source('SRC-004'), x: 932, y: 195, status: 'Online', zone: 'perimeter' },
  { id: 'fac-cam-13', source: source('SRC-005'), x: 68, y: 475, status: 'Online', zone: 'perimeter' },
  { id: 'fac-cam-14', source: source('SRC-006'), x: 760, y: 92, status: 'Online', zone: 'perimeter' },
]

export const facilityAlerts: FacilityAlert[] = [
  { id: 'event-01', title: 'Perimeter Breach', location: 'Building A - North Perimeter', severity: 'High', time: '2 min ago', x: 432, y: 100, zone: 'building-a', icon: 'TriangleAlert' },
  { id: 'event-02', title: 'Loitering Detected', location: 'Parking Lot A', severity: 'Medium', time: '5 min ago', x: 615, y: 390, zone: 'parking', icon: 'PersonStanding' },
  { id: 'event-03', title: 'Vehicle Without Authorization', location: 'East Entrance', severity: 'Medium', time: '8 min ago', x: 920, y: 285, zone: 'building-c', icon: 'CarFront' },
  { id: 'event-04', title: 'AI Model Performance Warning', location: 'Camera Zone 7', severity: 'Low', time: '15 min ago', x: 390, y: 346, zone: 'building-d', icon: 'Info' },
  { id: 'event-05', title: 'All Clear', location: 'West Perimeter', severity: 'Cleared', time: '22 min ago', x: 76, y: 185, zone: 'perimeter', icon: 'ShieldCheck' },
]

export const facilityAccessPoints = [
  { id: 'access-01', x: 508, y: 70, label: 'Main Entrance' },
  { id: 'access-02', x: 916, y: 425, label: 'East Entrance' },
  { id: 'access-03', x: 77, y: 420, label: 'West Entrance' },
]

export const facilitySensors = [
  { id: 'sensor-01', x: 466, y: 265 },
  { id: 'sensor-02', x: 526, y: 344 },
  { id: 'sensor-03', x: 815, y: 515 },
]

export const facilitySites = ['Northfield Corporate Campus', 'West Region Training Site']
