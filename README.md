# landing_page
This is my landing page project

git config --global user.email "jeanlucbiah.dev@outlook.com"
git config --global user.name "jlbiahdev"
ssh-keygen -t rsa -b 4096 -C "jeanlucbiah.dev@outlook.com"
pbcopy < ~/.ssh/id_rsa.pub
git clone git@github.com:jlbiahdev/landing_page.git
it checkout -b develop
git add .
git commit -m "Initial commit"
git push git@github.com:jlbiahdev/landing_page.git develop
touch index.html
