"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, Loader2, Paperclip, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function PopoverDemo() {
  const [loading, setLoading] = useState(true);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <Popover onOpenChange={(open) => setIsPopoverOpen(open)}>
      <PopoverTrigger asChild>
        <button className="fixed bottom-5 right-5 bg-indigo-700 shadow-lg text-white p-4 rounded-full">
          {isPopoverOpen ? (
            <ChevronDown className="w-10 h-10" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              viewBox="0 0 22 20"
            >
              <path
                fill="#FFF"
                d="M21.25 18.48V7.31a7.3 7.3 0 0 0-7.3-7.3H7.31a7.3 7.3 0 1 0 0 14.6h7.2s.58.04.93.17c.34.12.71.42.71.42l4.44 3.66s.4.34.55.27c.15-.07.11-.65.11-.65zM7.51 8.8c0 .49-.42.88-.95.88-.52 0-.95-.4-.95-.88V5.67c0-.49.43-.88.95-.88.53 0 .95.4.95.88V8.8zm4.07 1.48c0 .49-.43.88-.95.88s-.95-.39-.95-.88v-6.1c0-.48.43-.88.95-.88s.95.4.95.88v6.1zm4.06-1.48c0 .49-.42.88-.95.88-.52 0-.94-.4-.94-.88V5.67c0-.49.42-.88.94-.88.53 0 .95.4.95.88V8.8z"
              ></path>
            </svg>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[480px] mr-5 flex flex-col justify-between">
        <div className="bg-indigo-500 p-4 flex justify-between">
          <div className="flex items-center gap-3">
            <div className="relative bg-gray-400 text-2xl text-white grid place-content-center w-12 h-12 rounded-full">
              S
              <span className="w-4 h-4 border-2 border-indigo-600 rounded-full bg-green-200 absolute bottom-0 right-0"></span>
            </div>
            <div>
              <h2 className="text-2xl text-white">Scott Miller</h2>
              <p className="text-white">Offline</p>
            </div>
          </div>

          <button className="outline-none text-white h-14 w-14 hover:bg-indigo-700 grid place-content-center transition-all duration-300 rounded-lg">
            <XIcon />
          </button>
        </div>

        {/* Show loading state */}
        {loading ? (
          <div className="flex-1 flex justify-center items-center h-40">
            <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
          </div>
        ) : (
          // Content after loading
          <div className="m-5">
            <div className="border rounded-lg focus-within:border-indigo-600 transition-all duration-300 overflow-hidden flex items-end">
              <TextareaAutosize
                className="w-full min-h-14 max-h-40 resize-none outline-none p-4"
                placeholder="Type a message..."
              />
              <input type="file" id="file-input" className="hidden" />
              <label htmlFor="file-input">
                <Paperclip className="text-gray-400 mb-4 mr-4 cursor-pointer" />
              </label>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
