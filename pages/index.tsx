import Head from 'next/head';
import useSwr from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
   const { data } = useSwr('https://api.github.com/users/rokkoo', fetcher);

   console.log(data);

   return (
      <div className="flex flex-col items-center h-full justify-center">
         <img
            className="rounded-full w-32 h-32 shadow-2xl"
            src="https://avatars2.githubusercontent.com/u/25004016?v=4"
         />
         <div className="text-2xl font-think text-gray-100 tracking-wide">
            Alfonso
         </div>
      </div>
   );
}
