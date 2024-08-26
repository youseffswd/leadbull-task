import FooterLink from "./FooterLink";

const FooterLinks = () => {
    return (
        <ul className="mt-6 space-y-4">
            <li>
        <FooterLink href="/">Home</FooterLink>
            </li>

            <li>
                <FooterLink href="/about-us">About Us</FooterLink>
            </li>

            <li>
                <FooterLink href="/services">Services</FooterLink>
            </li>

            <li>
                <FooterLink href="/support">Support</FooterLink>

            </li>

            <li>
                <FooterLink href="/book-appointment">Contact Us</FooterLink>
            </li>
        </ul>
    );
};

export default FooterLinks;
