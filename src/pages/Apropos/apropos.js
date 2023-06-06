import Banner_a_propos from "../../components/Banner_a_propos/banner_a_propos";
import Collapse from "../../components/Collapse/collapse";

function Apropos() {
  return (
    <>
      <Banner_a_propos img_banner_a_propos="assets/photo_banner_a_propos.png" />
      <Collapse titre_collapse="Fiabilité" />
      <Collapse titre_collapse="Respect" />
      <Collapse titre_collapse="Service" />
      <Collapse titre_collapse="Sécurité" />
    </>
  );
}

export default Apropos;
