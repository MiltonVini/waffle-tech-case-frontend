import { UseAuth } from "./hooks/authHooks";

function Auth() {
    const { loading } = UseAuth()

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {
                loading && (
                    <>
                    <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-4 text-gray-600">Carregando...</p>
                    </>
                )
            }
        </div>
    );
}

export default Auth;
