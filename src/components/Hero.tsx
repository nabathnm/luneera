export default function Hero() {
    return (
      <>
      <div className="h-150 md:h-screen w-full flex relative overflow-hidden mt-20 md:mt-0">
        <div className="absolute top-30 left-25 hidden md:block">
          <h1 className="text-7xl cormorant text-primary">Elegance in</h1>
          <h1 className="text-7xl cormorant text-primary">Every Layer</h1>
        </div>
        <img src="./hero.png" className="select-none pointer-events-none absolute left-1/2 -translate-x-1/2 2xl:bottom-40 2xl:scale-150 xl:bottom-0 scale-140 bottom-25 md:scale-100" alt="" />
        <div className="md:w-76 w-50 absolute md:right-25 right-6 bottom-15 md:bottom-30  flex flex-col items-start gap-4">
          <p className="playfair text-primary">Premium hijab designed to accompany your every step — comfortable, graceful and meaningful.</p>
          <a href="https://shopee.co.id/" className="cursor-pointer inter text-primary bg-foreground py-2 px-4 rounded-full outline-2 outline-primary/60">Explore Collection</a>
        </div>
      </div>
      </>
    )
}