const variants = {
    primary: "bg-blue-500 text-indigo-50 hover:bg-blue-600 rounded-md mr-2 text-sm sm:text-base",
    stone: "bg-stone-600 text-stone-200 rounded-md hover:bg-stone-700"
}

export default function Button({children, onClick, className="", variant = "primary"}) {
    const base = "px-3 py-1 cursor-pointer self-center mt-6"
    const variantClass = variants[variant] ?? variant.primary
    return (
        <button className={`${base} ${variantClass} ${className} onClick={onClick}`}>
            {children}
        </button>
    )
}