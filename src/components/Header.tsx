export default function Header() {
  return (
    <div className="w-full h-44 bg-red-600 flex items-center justify-evenly">
      <picture>
        <img src="" alt="" />
      </picture>
      <form>
        <input className="w-96 h-11 pl-5 text-white rounded-full bg-rose-950 rounded-full border-solid border-2 border-white" />
      </form>
      <div>
        <div className="text-white cursor-pointer">LOGIN/SIGNUP</div>
        <ul className="text-white flex gap-5 ">
          <li className="cursor-pointer">MOVIES</li>
          <li className="cursor-pointer">TV SHOWS</li>
          <li className="cursor-pointer">MOVIE TRIVIA</li>
          <li className="cursor-pointer">NEWS</li>
          <li className="cursor-pointer">SHOWTIMES</li>
        </ul>
      </div>
    </div>
  );
}
