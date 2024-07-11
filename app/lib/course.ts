export interface Course {
  courseTitle: string
  hours: string
  coverage: string
  plans: Plan[]
}

export interface Plan {
  name: string
  fare: string
}

export const courses: Course[] = [
  {
    courseTitle: '三合一',
    hours: '3.5～4',
    coverage: '海濱步道・登山步道・繞島',
    plans: [
      { name: '全票', fare: '850' },
      { name: '敬老兒童票', fare: '700' },
      { name: '3歲以下', fare: '200' },
    ]
  },
  {
    courseTitle: '四合一',
    hours: '4～4.5',
    coverage: '海濱步道・登山步道・繞島・藍色公路',
    plans: [
      { name: '全票', fare: '1050' },
      { name: '敬老兒童票', fare: '900' },
      { name: '3歲以下', fare: '200' },
    ]
  },
  {
    courseTitle: '二合一',
    hours: '2',
    coverage: '海濱步道・繞島',
    plans: [
      { name: '全票', fare: '700' },
      { name: '敬老兒童票', fare: '550' },
      { name: '3歲以下', fare: '200' },
    ]
  },
  {
    courseTitle: '二合一+藍色公路',
    hours: '2.5～3',
    coverage: '海濱步道・繞島・藍色公路',
    plans: [
      { name: '全票', fare: '900' },
      { name: '敬老兒童票', fare: '750' },
      { name: '3歲以下', fare: '200' },
    ]
  },
]