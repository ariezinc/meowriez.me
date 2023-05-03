import { useLanyard } from "use-lanyard";

/* 
    Thanks to https://github.com/iGalaxyYT/igalaxy.dev/blob/main/components/Lanyard.tsx for the help :)
*/

export default function DiscordActivity() {
  const { data: activity } = useLanyard("952354740858134628");

  if (
    !activity ||
    activity.discord_status === "offline" ||
    activity.activities.length <= 0
  )
    return <></>;

  return (
    <div className="flex flex-row items-center space-x-2 mt-3">
      <div className="animate-pulse h-2 w-2 rounded-full bg-green-300"></div>
      <span className="text-green-300 text-sm">
        {activity.listening_to_spotify ? (
          <>
            Listening to <span className="font-bold mr-[1.5px]">`</span>
            <a
              href={`https://open.spotify.com/track/${activity.spotify?.track_id}`}
              className="hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {activity.spotify?.song}
            </a>
            <span className="font-bold ml-[1.5px]">`</span>
          </>
        ) : (
          `Playing ${activity.activities[0].name}`
        )}
      </span>
    </div>
  );
}
