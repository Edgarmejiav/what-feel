export default function Home() {
    return (
        <>

            <main className=" flex min-h-screen flex-col items-center  p-24 gap-y-14 ">
                <div className="
             absolute z-[-1] mt-[-100px]  h-full w-full  "
                     style={{
                         backgroundImage: "radial-gradient(circle at 50% 50%, rgba(200, 200, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 25%, transparent 25%)",
                         backgroundSize: "10px 10px"
                     }}
                >

                </div>

                {/*<div className=" absolute z-[-1] mt-[-100px]  h-full w-full*/}
                {/* bg-gradient-to-r from-transparent via-red-500 to-transparent*/}
                {/* "*/}
                {/*>            </div>*/}
                <div className="flex flex-col items-center justify-center gap-y-10 ">

                    <h1 className="  break-keep w-1/2 p-2 sm:text-7xl text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500  "> Analisa
                        los sentimientos de tu chat de whatsapp </h1>

                </div>
                <div className="flex w-1/2 gap-x-4 justify-center">

                    <input
                        className="border-1 block h-12 w-1/2 rounded-md border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)] bg-origin-border px-3 py-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none"
                        placeholder="Enter your email"
                    />
                    <button
                        className="inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    >
                        Subscribe
                    </button>
                </div>

            </main>


        </>
    )
}
