export const saveToStorage = (data: any) => {
    localStorage.setItem('cart', JSON.stringify(data))
}

export const getCartInStorage = () => JSON.parse(localStorage.getItem('cart') || '')    