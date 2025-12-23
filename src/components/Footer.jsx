import { FaTwitter, FaFacebookF, FaTelegramPlane, FaYoutube, FaTiktok, FaDiscord } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1c1e23] text-white py-25 relative">
      <div className="max-w-8xl mx-auto flex items-center justify-around gap-10">

        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
           <img src="./logo_dark.png" alt="" />
          </div>

          <p className="text-lg text-white/70 mb-6 max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          </p>

          <div className="flex gap-3">
            {[FaTwitter, FaFacebookF, FaTelegramPlane, FaYoutube, FaTiktok, FaDiscord].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-14 h-14 rounded-lg bg-[#2b2d33] flex items-center justify-center hover:bg-blue-500 transition cursor-pointer"
                >
                  <Icon />
                </div>
              )
            )}
          </div>

          <p className="text-sm text-white/40 mt-6">
            Copyright © 2022 Themesflat. All Rights Reserved.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Marketplace</h3>
          <ul className="space-y-2 text-md text-white/70">
            <li>Explore</li>
            <li>Item Detail</li>
            <li>Live Audition</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Stats</h3>
          <ul className="space-y-2 text-md text-white/70">
            <li>Ranking</li>
            <li>Login</li>
            <li>Create</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Resource</h3>
          <ul className="space-y-2 text-md text-white/70">
            <li>Blogs</li>
            <li>Help and Center</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">My account</h3>
          <ul className="space-y-2 text-md text-white/70">
            <li>Profile</li>
            <li>My wallet</li>
          </ul>
        </div>

        <div className="max-w-86">
          <h3 className="font-semibold mb-4">Subscribe Us</h3>
          <p className="text-md text-white/70 mb-4">
            Signup for our newsletter to get the latest news in your inbox.
          </p>

          <div className="flex items-center bg-[#2b2d33] rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Info@yourgmail.com"
              className="bg-transparent px-5 py-3 outline-none text-md w-full"
            />
            <button className="bg-blue-500 px-5 py-3">
              ➤
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
