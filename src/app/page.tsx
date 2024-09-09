import SongReleaseSignup from "@/components/SongReleaseSignup";
import PlaySong from "@/components/PlaySong";

export default function Home() {
  return (
    <div className="bg-green-screen h-screen nokia-text flex flex-col items-center justify-center">
      <div className="text-center  text-black  mb-20">
        <h1 className="text-3xl">{"Please Don't Call My Phone"}</h1>
        <p className="text-xl">by obi</p>
      </div>

      <SongReleaseSignup />

      <PlaySong />
    </div>
  );
}
