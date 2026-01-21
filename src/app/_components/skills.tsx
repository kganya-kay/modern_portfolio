import Image from "next/image";

const people = [
    {
      name: 'TypeScript, Nextjs, Postgres',
      email: 'nextAuth, Trpc, T-3 Stack',
      role: 'Co-Founder / CEO',
      imageUrl:'/next.jpg',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'javascript ',
      email: 'node.js,jquery',
      role: 'Co-Founder / CTO',
      imageUrl:"https://th.bing.com/th/id/OIP.9jAkFPGpe5YO-8RM0Le_XgHaIa?w=4000&h=4548&rs=1&pid=ImgDetMain",
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'CSS, Tailwind, Material UI & Bootstrap',
      email: 'styling, components',
      role: 'Business Relations',
      imageUrl:'https://th.bing.com/th/id/OIP.9GLqOe56aIqcRvqi0jCQegHaE8?rs=1&pid=ImgDetMain',
      lastSeen: null,
    },
    {
      name: 'React',
      email: 'state Managent, front end functionality',
      role: 'Front-end Developer',
      imageUrl:'https://th.bing.com/th/id/R.cd2a66310a89751a512b20f8f98a5918?rik=TBgYTO%2foYYcbyg&pid=ImgRaw&r=0',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'HTML',
      email: 'HTML5',
      role: 'Designer',
      imageUrl:'https://th.bing.com/th/id/R.e1d424c4b9be7009dd57ef4e7d58e343?rik=EZ8NO5x85jZ0Vg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-NGHwBncyA68%2fUiMm_8b2ZUI%2fAAAAAAAAAnA%2f17OGXCKI4zE%2fs1600%2fLogo%2bHTML5.JPG&ehk=rnVe3RUksYQ4LMnsZ6Xxyf3F5lkj3Br1Eu6vOVCkYh0%3d&risl=&pid=ImgRaw&r=0',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Java, C++',
      email: '',
      role: 'Director of Product',
      imageUrl:'https://th.bing.com/th/id/OIP.wyY7fa7FHVIsdcoGwdybXQHaHa?rs=1&pid=ImgDetMain',
      lastSeen: null,
    },
  ]
  
  export default function Example() {
    return (
      <ul role="list" className="divide-y divide-gray-100 p-5">
        {people.map((person) => (
          <li key={person.name} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <Image
                alt={person.name}
                src={person.imageUrl}
                width={48}
                height={48}
                className="size-12 flex-none rounded-full bg-gray-50 object-cover"
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">{person.name}</p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">{person.email}</p>
              </div>
            </div>
           
          </li>
        ))}
      </ul>
    )
  }
  
