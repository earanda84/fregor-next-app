export const DashboardLayout = ({ user }) => {
    return (
        <div className="border grid grid-rows-3 grid-flow-col gap-0 h-screen">
            <div className="row-span-3  mt-[50px] ...">
                <section className="border row-start-auto">
                    <button className="relative uppercase inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-300 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Categorias
                        </span>
                    </button>
                </section>
            </div>
            <div className="col-span-2 border ..">
                <h1 className="text-center uppercase">Bienvenid@ {user}</h1>
            </div>
            <div className="row-span-2 border col-span-2 ...">03</div>
        </div>
    );
};
