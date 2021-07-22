# Flat Data Demo

## Hands-on

Go to this DEMO.md file and click on each of the link in setup below :)
You can keep the demo video on the LHS of your desktop while having the browser on the RHS for optimal "journey".

## Setup

* https://simonwillison.net/2020/Oct/9/git-scraping/
* https://twitter.com/nyt_diff
* https://octo.github.com/projects/flat-data
* https://github.com/githubocto/flat-demo-bitcoin-price
* https://api.coindesk.com/v2/bpi/currentprice.json
* https://github.com/the-pudding/data/actions
* https://flatgithub.com/vitoc/taichi/
* https://www.runningroot.com
* https://github.com/topics/git-scraping

## Simon Willison and Git scraping

GitHub actions as a mechanism to scrape data from other websites / JSON sources
So why would you do something like this?

## NYT Diff

This Twitter account tracks changs made to New York Times headlines over time.
Interesting to see how a world famous publication works, even in public.
I think its an interesting way to see how headlines can influence how we perceive news and happenings

## Start at octo.gitHub.com

* This is the site that got me started on exploring Flat Data
* This is the site to visit to learn more on Flat Data
* A project by CTO of GitHub that consist of 3 different pieces
* Flat Action is a GitHub Action that you can deploy to a repository to help you fetch and transform data
* Flat Editor on the other hand is a VSCode extension that helps you author Flat Data workflows (the Flat Actions)
* Flat Viewer is a website that you can point to any repo with Flat data and it will render the data in a nice table

## Show BTC flat demo repo (Simple data)

* This repo consist of an action that scrapes Bitcoin price data from the API of Coindesk and stores that as a JSON 
* Show .github/workflows/flat.yml
* Show source of Bitcoin price info via link
* Show btc-price-postprocessed.json
* Add flat to show flatgithub.com version of repo
* We can leverage the intrinsic Commit mechanism on GitHub to create data that has and added time dimension. 
* You can fork this repo and check out the Flat version as well.

## Show Pudding data (Tabular)

* Flat data doesn't have to be a feed (show no Actions, files not changed daily)
* Add flat and show pudding table
* Next: how to create this kind of dataset

## Running Root: Tool to create Flat schema and datasets

* Go to: vitoc/taichi > Fork
* Go to www.runningroot.com > Add the GitHub app to the taichi repo
* Goto /taichi, show existing Datasets 
* Create new dataset Schools: Name, Location, MonthlyFee. As this is Flat data, the form doesn't need to be rows or arrays, but in this case it is..
* Commit schema and add data: Tai Fit, Chi Chi, Chuen Art: Commit
* See data on GitHub and add Flat
* Filter school names

## Git-scraping topic

* Growing community using the technique to transform and present data in interesting ways (from Covid to elections)

## Close

GitHub Actions, intrinsic mechanisms in Git such as Commits and Branches as well as the public nature of GitHub public repositories presents interesting ways to deal with data
