import { CalendarCheckIcon, HandshakeIcon, NewspaperIcon, RssIcon } from "lucide-react";

export const navbar = [
    { icon: <RssIcon />, name: "Yangiliklar", slug: "/news" },
    { icon: <NewspaperIcon />, name: "Loyihalar", slug: "/projects" },
    { icon: <HandshakeIcon />, name: "Hamkorlar", slug: "/partners" },
    { icon: <CalendarCheckIcon />, name: "Tadbirlar", slug: "/events" },
    { icon: <NewspaperIcon />, name: "Tashabbuskorlar", slug: "/initiators" },
    { icon: <NewspaperIcon />, name: "Xizmatlar", slug: "/services" },
    { icon: <NewspaperIcon />, name: "Aql Markazi", slug: "/center_mind" },
    { icon: <NewspaperIcon />, name: "Ilmiy etika", slug: "/ilmiy_etika" },
];

export const data = {
    labels: [
        "",
        // "",
        "",
        // "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",


    ],
    datasets: [
        // {
        //     data: [9, 7.8, 6, 3, 7, 5, 6, 10, 7, 5, 0, 10, 7, 5, 6, 10, 7, 5, 6, 10, 7, 5, 6],
        //     backgroundColor: "transparent",
        //     borderColor: "#ffc700",
        //     pointBorderColor: "transparent",
        //     pointBorderWidth: 4,
        //     tension: 0.5,
        //     yAxisID: "y",
        // },

        {
            label: "$",
            data: [9, 7.8, 6, 3, 7, 5, 6, 10, 7, 5, 10, 10, 7, 5, 6, 10, 7, 5, 6, 10, 7, 5, 6, 7, 5, 7, 3],
            borderColor: "#169bd4",
            border: 1,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            yAxisID: 'y1',
        },
    ],
};

export const options = {
    responsive: true,
    interaction: {
        mode: 'index' as const,
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: true,
            text: 'Chart.js Line Chart - Multi Axis',
        },
    },
    scales: {
        y: {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
        },
        y1: {
            type: 'linear' as const,
            display: true,
            position: 'right' as const,
            grid: {
                drawOnChartArea: false,
            },
        },
    },
};
