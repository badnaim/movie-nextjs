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
        <div>LOGIN/SIGNUP</div>
        <ul className="text-white flex gap-5">
          <li>MOVIES</li>
          <li>TV SHOWS</li>
          <li>MOVIE TRIVIA</li>
          <li>NEWS</li>
          <li>SHOWTIMES</li>
        </ul>
      </div>
    </div>
  );
}
