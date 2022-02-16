export const parseCurrency = input =>
  parseFloat(('' + input).replace(/\./g, '').replace(/,/, '.'))

export const formatCurrency = price => {
  const num = parseFloat(price)

  if (isNaN(num)) {
    return ''
  }

  const formatted = Intl.NumberFormat('es-ES', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num)

  return formatted
}
