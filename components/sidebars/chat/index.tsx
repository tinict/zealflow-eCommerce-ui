import React from "react";

function ChatSidebarItem({ user, ...props }: any) {
  const mostRecentMes = user.messages[user.messages.length - 1];

  return (
    <div {...props}>
      <div className="flex items-center gap-3">
        <img
          className="w-[40px] h-[40px] rounded-full"
          src={user.url_avatar}
          alt="avatar"
        />
        <div>
          <p className="text-[14px] font-medium leading-3">{user.name}</p>
          <p className="h-[24px] overflow-hidden">
            <small>{mostRecentMes.message}</small>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1 items-end">
        <small>{mostRecentMes.time}</small>
        {mostRecentMes.status === 2 && mostRecentMes.user !== 1 && (
          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
        )}
      </div>
    </div>
  );
}

export default ChatSidebarItem;
