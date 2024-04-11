import Link from "next/link";
function Menu() {
  return (
    <nav className="bg-black text-white">
      <ul>
        <li>
          <Link href={"./"} prefetch={false}>
            - Hjem
          </Link>
        </li>
        <li>
          <Link href={"./henry"} prefetch={false}>
            - Henry
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
