require "shellwords"

LABEL = "今日ネットに費やした時間が表示される"

font = ARGV[0] ? "-font #{ARGV[0]}" : ""

puts `convert -resize 48x48!   icons/original.png icons/icon48.png`
puts `convert -resize 16x16!   icons/original.png icons/icon16.png`
puts `convert -resize 128x128! icons/original.png icons/icon128.png`
puts `convert -resize 19x19!   icons/original.png icons/icon19.png`

puts `convert -resize 640x -background black -gravity center -extent 640x400 screenshots/original.png screenshots/screenshot640x400.png`

# ラベル文字列の追加
puts `convert -gravity center -size 640x50 -background '#0008' -fill white #{font} -pointsize 30 label:'#{Shellwords.escape(LABEL)}' tmp/string.png`
puts `composite -gravity south -compose over tmp/string.png screenshots/screenshot640x400.png screenshots/screenshot640x400_with_label.png`
