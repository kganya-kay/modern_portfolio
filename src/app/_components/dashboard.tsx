import Link from "next/link";
import Personal from "./personal";
import Skills from "./skills";

export default function Example() {
  return (
    <div className="bg-gray-700 rounded-2xl py-6">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        

        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Latest Project
                </p>
                <p className="text-sm font-bold text-blue-600">Cloudus</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  A Full Stack project management platform for freelancers.Built
                  with Next.js
                </p>
                <div>
                  <img
                    className="size-full rounded-lg"
                    src="https://qgl4gv7np8.ufs.sh/f/zFJP5UraSTwKRLoz1gRulTxgBDqtUn38AMbaYkdyVI510rJQ"
                    alt=""
                  />
                </div>
                <div className="flex p-2">
                  <Link
                    className="w-full bg-gray-800 p-1 text-center font-bold text-white"
                    href="https://cloudus2-0-5.vercel.app/"
                    target="_blank"
                  >
                    View Project
                  </Link>
                </div>
              </div>

              <div className="px-8 sm:px-10 py-3 border-y border-gray-300 mx-3">
                <p className="text-blue-500 font-bold text-lg text-center">My Work</p>
                <p className="text-center text-sm/6 ">
                  I’ve developed innovative web applications that combine
                  technical expertise with business branding strategies.
                </p>
              </div>

              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="text-sm font-bold text-blue-500">Tech Care</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  A Front End medical care project, consuming a third party API. Using a charting
                  library (charts.js) to visualize and display patient data.
                </p>
                <div>
                  <img
                    className="size-full rounded-lg"
                    src="https://qgl4gv7np8.ufs.sh/f/zFJP5UraSTwK1pgyOj54aSewvlUQkJysxH7qM3RCPorApfE5"
                    alt=""
                  />
                </div>
                <div className="flex p-2">
                  <Link
                    className="w-full bg-gray-800 p-1 text-center font-bold text-white"
                    href="https://tech-care2025.vercel.app/"
                    target="_blank"
                  >
                    View Project
                  </Link>
                </div>
              </div>

             

              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="text-sm font-bold text-blue-500">ERF350</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                www.erf350.co.za <br />shared office space for
                            content creators and influencers!<br />
                            Freelance project built at Space.tm
                </p>
                <div>
                  <img
                    className="size-full rounded-lg"
                    src="/logo_2.png"
                    alt=""
                  />
                </div>
                <div className="flex p-2">
                  <Link
                    className="w-full bg-gray-800 p-1 text-center font-bold text-white"
                    href="www.erf350.co.za"
                    target="_blank"
                  >
                    View Project
                  </Link>
                </div>
              </div>


              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="text-sm font-bold text-blue-500">To Do App</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  To-do Front End App Build With React. 
                </p>
                <div>
                  <img
                    className="size-full rounded-lg"
                    src="/todo.jpeg"
                    alt=""
                  />
                </div>
                <div className="flex p-2">
                  <Link
                    className="w-full bg-gray-800 p-1 text-center font-bold text-white"
                    href="https://hopeful-poitras-b85490.netlify.app/"
                    target="_blank"
                  >
                    View Project
                  </Link>
                </div>
              </div>
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="text-sm font-bold text-blue-500">Vintage PortFolio</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Portfolio Website build with Vanilla Javascript, HTML and CSS
                </p>
                <div>
                  <img
                    className="size-full rounded-lg"
                    src="https://qgl4gv7np8.ufs.sh/f/zFJP5UraSTwK7N9dy4zdBoKwItQZfkMAYJczlNpsRgqOjVFb"
                    alt=""
                  />
                </div>
                <div className="flex p-2">
                  <Link
                    className="w-full bg-gray-800 p-1 text-center font-bold text-white"
                    href="https://kekanadk.netlify.app/"
                    target="_blank"
                  >
                    View Project
                  </Link>
                </div>
              </div>

              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="text-sm font-bold text-blue-500">OS Branding</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Landing Page for a branding business.Built with React 
                </p>
                <div>
                  <img
                    className="size-full rounded-lg"
                    src="https://qgl4gv7np8.ufs.sh/f/zFJP5UraSTwKSdchQN13r4ubPN5fEmjLRhBCOvwzZ7K2gxsG"
                    alt=""
                  />
                </div>
                <div className="flex p-2">
                  <Link
                    className="w-full bg-gray-800 p-1 text-center font-bold text-white"
                    href="www.osbranding.co.za"
                    target="_blank"
                  >
                    View Project
                  </Link>
                </div>
              </div>

              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="text-sm font-bold text-blue-500">Tyger Valley</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Shopping Mall Landing Page. Built with Vanilla HTML, Javascript and bootstrap
                </p>
                <div>
                  <img
                    className="size-full rounded-lg"
                    src="https://qgl4gv7np8.ufs.sh/f/zFJP5UraSTwKNJDv2tVhgj1lHiczkx7yJ4pfRnsDYwqCV6od"
                    alt=""
                  />
                </div>
                <div className="flex p-2">
                  <Link
                    className="w-full bg-gray-800 p-1 text-center font-bold text-white"
                    href="https://heartfelt-salmiakki-4f33f3.netlify.app/"
                    target="_blank"
                  >
                    View Project
                  </Link>
                </div>
              </div>

              
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] p-2 max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="flex w-full justify-around pt-10">
                <img
                  className="size-40 rounded-full object-cover"
                  src="https://qgl4gv7np8.ufs.sh/f/zFJP5UraSTwKDWsL9ERzGfn8OhYAcm3stI41pXWPSaxRd7rE"
                  alt=" Profile Picture of Doctor Kekana"
                />
              </div>
              <div className="mt-2 flex w-full justify-center rounded-md bg-gray-800">
                <p className="text-center text-lg font-bold text-white">
                  Doctor Kganya Kekana
                </p>
              </div>
              <br />
              <div>
                <Personal />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Security
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Secure and Scalable web Apllications. 
                </p>
              </div>
              <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                <img
                  className="h-[min(152px,40cqw)] object-cover"
                  src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Skills
                </p>
              </div>
              <div>
                <Skills />
              </div>
              
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
