export const Nav = () => {
    return <div className="text-xl font-bold py-5 px-52 flex w-full  flex-row justify-between items-center  ">
        <h3 className=" text-2xl">What Feel !</h3>

        <button className="flex  gap-x-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"/>
            </svg>
            <span>
            Iniciar sesión
           </span>
        </button>

    </div>
}