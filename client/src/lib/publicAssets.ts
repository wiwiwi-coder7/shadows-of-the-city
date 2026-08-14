const manuscriptPath = "/manus-storage/";
const storageBase = "https://blxvvllrtpmqgswhpjiy.supabase.co/storage/v1/object/public/game-assets";

function staticFilename(filename: string) {
  return filename.replace(/_[a-f0-9]{8}(?=\.[^.]+$)/i, "");
}

export function publicAssetUrl(value: string) {
  if (!value.startsWith(manuscriptPath)) return value;
  const filename = staticFilename(value.slice(manuscriptPath.length));
  const folder = filename.endsWith(".ttf") ? "fonts" : filename.includes("expression_sheet") ? "characters" : "scenes";
  return `${storageBase}/${folder}/${filename}`;
}
