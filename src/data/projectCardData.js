import jetAssemblyModelImage from "../assets/images/jet-assembly-model.webp";
import hydraulicModelImage from "../assets/images/hydraulic-model.webp";
import ironManHelmetImage from "../assets/images/3D-iron-man.webp";

const projectCards = [
    {
        id: 1,
        category: "Solidworks",
        title: "Jet Engine",
        image: jetAssemblyModelImage,
        anchor: "/engine",
    },
    {
        id: 2,
        category: "F.S. Elliott",
        title: "Hydraulic Manifold",
        image: hydraulicModelImage,
        anchor: "/manifold",
    },
    {
        id: 3,
        category: "Solidworks",
        title: "Iron Man Helmet",
        image: ironManHelmetImage,
        anchor: "/iron",
    },
];

export default projectCards;
