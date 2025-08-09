git config --global user.email "axionindustries.official@gmail.com"
git config --global user.name "Axion Industries"
git add .
git commit -m "Testing maintenance page num. 1."
git push origin main
curl -X POST https://api.render.com/deploy/srv-d2af26je5dus73cplfc0?key=KMySwX2RZWI