const LeftSignUp = () => {
  return (
    <div className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center px-12">
      <div className="max-w-md">
        <h1 className="text-4xl font-bold mb-6">MentorConnect</h1>
        <p className="text-xl mb-8">
          Connect with experienced professionals and alumni to guide your career journey
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="bg-green-500  p-2 rounded-full mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p>Get personalized career guidance</p>
          </div>
          <div className="flex items-center">
            <div className="bg-yellow-500 p-2 rounded-full mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p>Develop essential professional skills</p>
          </div>
          <div className="flex items-center">
            <div className="bg-indigo-500 p-2 rounded-full mr-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <p>Build valuable professional networks</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSignUp