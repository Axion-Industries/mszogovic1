git config --global user.email "axionindustries.official@gmail.com"
git config --global user.name "Axion Industries"
git add .
git commit -m "Added a new feature to the AP Stats page, resources and pdf."
git push origin main
curl -X POST https://api.render.com/deploy/srv-d2be1615pdvs73clu13g?key=hhGYxul85AI