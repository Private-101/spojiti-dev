import {
    isRouteErrorResponse,
    useRouteError, Link
  } from "@remix-run/react";
  import {UsersList} from '~/components/pico/UserList';
  export function ErrorBoundary() {
    const error = useRouteError();
  
    if (isRouteErrorResponse(error)) {
      return (
        <div>
          <h1>
            {error.status} {error.statusText}
          </h1>
          <p>{error.data}</p>
        </div>
      );
    } else if (error instanceof Error) {
      return (
        <div>
          <h1>Error</h1>
          <p>{error.message}</p>
          <p>The stack trace is:</p>
          <pre>{error.stack}</pre>
        </div>
      );
    } else {
      return <h1>Unknown Error</h1>;
    }
  };

  export default function ApplicantsRoute() {
    return (
      <>
      <main className='grow mt-12'>
        {/** <!-- ===== Main Section Starts ===== --> */}
        <div className='flex flex-1 flex-col justify-center items-center pb-4'>
      <p className="font-bold text-lg">Are you a restaurant looking to hire?</p>
      <Link to='/search/jobs' className="mb-4 mt-2 p-2 rounded-md font-semibold text-sm transition-all text-sp-primary hover:text-black border-2 border-solid border-black hover:border-sp-primary hover:cursor-pointer hover:shadow-md">
      <p className=''>
        Click Here to Search Jobs
      </p>
      </Link>
    </div>
    <UsersList />
        {/** <!-- ===== Main Section Ends ===== --> */}
      </main>
      
      </>
    )
  }