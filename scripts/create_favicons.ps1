Add-Type -AssemblyName System.Drawing
$src = "C:\Users\shrey\.gemini\antigravity-ide\brain\1f5d8821-7ceb-4f6e-82be-efdafbd30fbf\gta_vi_favicon_1788552556033.jpg"
$img = [System.Drawing.Image]::FromFile($src)

function Resize-Image($image, $width, $height, $targetPath) {
    $bmp = New-Object System.Drawing.Bitmap $width, $height
    $graph = [System.Drawing.Graphics]::FromImage($bmp)
    $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graph.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graph.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graph.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $graph.DrawImage($image, 0, 0, $width, $height)
    $bmp.Save($targetPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $graph.Dispose()
    $bmp.Dispose()
}

$cwd = Get-Location
$pub = Join-Path $cwd "public"

Resize-Image $img 512 512 (Join-Path $pub "favicon-512x512.png")
Resize-Image $img 192 192 (Join-Path $pub "favicon-192x192.png")
Resize-Image $img 180 180 (Join-Path $pub "apple-touch-icon.png")
Resize-Image $img 32 32 (Join-Path $pub "favicon-32x32.png")
Resize-Image $img 16 16 (Join-Path $pub "favicon-16x16.png")
Resize-Image $img 48 48 (Join-Path $pub "favicon.ico")
Resize-Image $img 512 512 (Join-Path $pub "favicon.png")

$img.Dispose()
Write-Output "Favicons generated successfully"
