const HeroTitle = ({ title }: { title: string }) => {
    return (
        <div className="text-center py-6">
            <h2 className="text-4xl font-extrabold">{title}</h2>
        </div>
    )
}
export default HeroTitle;