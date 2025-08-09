git config --global user.email "axionindustries.official@gmail.com"
git config --global user.name "Axion Industries"
git add .
git commit -m "Reverted to previous working commit."
git push origin main
curl -X POST https://api.render.com/deploy/srv-d2be1615pdvs73clu13g?key=hhGYxul85AI