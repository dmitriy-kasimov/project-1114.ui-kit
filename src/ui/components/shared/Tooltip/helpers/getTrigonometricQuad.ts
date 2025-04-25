export const getTrigonometricQuad = (x: number, y: number) => {
    const width = document.documentElement.clientWidth
    const height = document.documentElement.clientHeight

    const isFirst = x > width / 2 && y < height / 2
    const isSecond = x < width / 2 && y < height / 2
    const isThird = x < width / 2 && y > height / 2
    //const isFourth = x > width / 2 && y > height / 2

    if (isFirst) return 'top-right'
    else if (isSecond) return 'top-left'
    else if (isThird) return 'bottom-left'
    return 'bottom-right'
}
