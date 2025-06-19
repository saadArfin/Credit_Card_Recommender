// interface MessageProps {
//   sender: "user" | "bot";
//   text: string;
// }

// export default function Message({ sender, text }: MessageProps) {
//   return (
//     <div className={`p-3 my-2 rounded-lg max-w-md ${sender === "user" ? "bg-blue-100 ml-auto" : "bg-gray-100 mr-auto"}`}>
//       <p className="text-sm text-gray-800 whitespace-pre-wrap">{text}</p>
//     </div>
//   );
// }

// src/app/components/Message.tsx
// export default function Message({ sender, text }: { sender: "user" | "bot"; text: string }) {
//   const isUser = sender === "user";
//   return (
//     <div className={`my-2 ${isUser ? "text-right" : "text-left"}`}>
//       <span className={`inline-block px-4 py-2 rounded ${isUser ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
//         {text}
//       </span>
//     </div>
//   );
// }





import React from "react";

interface MessageProps {
  sender: "user" | "bot";
  text: string;
}

export default function Message({ sender, text }: MessageProps) {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} my-2`}>
      <div
        className={`max-w-[70%] px-6 py-4 rounded-3xl shadow-xl text-lg whitespace-pre-wrap font-semibold transition-all duration-200
          ${isUser
            ? "bg-gradient-to-br from-[#43cea2] to-[#185a9d] text-white text-right border-2 border-[#FFD700] shadow-lg"
            : "bg-gradient-to-br from-[#232526] to-[#393e46] text-[#FFD700] text-left border-2 border-[#43cea2] shadow-lg"}
        `}
        style={{ wordBreak: "break-word" }}
      >
        {text}
      </div>
    </div>
  );
}
