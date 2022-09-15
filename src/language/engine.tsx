const list = {
    "regular":"regular",
    "bold":"bold",
    "row":"row",
    "left":"left",
    "Cancel":"Cancel"
}

export function t(key: string, options: any = {}): string {
  return list[key]
}
