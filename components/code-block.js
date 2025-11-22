export default function CodeBlock({ filename, children } ) {
    return (
        <div className="not-prose">
            {filename && (
                <span className="px-2 py-1 font-mono border border-gray-700 bg-gray-900 text-gray-300 rounded-t-md">
                    {filename} 
                </span>
            )}
            <div className="bg-black rounded-">
                <pre className="px-2 py-2">
                {children}
                </pre>
            </div>
        </div>
    )
}