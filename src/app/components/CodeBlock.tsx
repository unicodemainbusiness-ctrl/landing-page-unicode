import React from "react";

export default function CodeBlock() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl rotate-3 opacity-20 blur-lg"></div>
      <div className="relative bg-[#151D3A] p-8 rounded-2xl text-white shadow-2xl">
        <div className="flex items-center gap-3 mb-6 border-b border-gray-700 pb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-auto text-xs font-mono text-gray-500">
            App.tsx
          </span>
        </div>
        <div className="font-mono text-sm space-y-2 text-indigo-300">
          <p>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-yellow-300">Success</span> ={" "}
            <span className="text-blue-400">async</span> () ={">"} {"{"}
          </p>
          <p className="pl-4">
            <span className="text-purple-400">await</span> Unicode.
            <span className="text-blue-400">build</span>({"{"}
          </p>
          <p className="pl-8">
            quality: <span className="text-green-400">&quot;High&quot;</span>,
          </p>
          <p className="pl-8">
            deadline: <span className="text-green-400">&quot;OnTime&quot;</span>
            ,
          </p>
          <p className="pl-8">
            price:{" "}
            <span className="text-green-400">&quot;Transparent&quot;</span>
          </p>
          <p className="pl-4">{"}"});</p>
          <p className="pl-4">
            <span className="text-purple-400">return</span>{" "}
            <span className="text-green-400">&quot;Business Growth&quot;</span>;
          </p>
          <p>{"}"}</p>
        </div>
      </div>
    </div>
  );
}
