#!/bin/bash

# Array of replacements
declare -a old_alts=(
  'alt="TuxTechRepair"'
  'alt="Charles River IMS"'
  'alt="InvestmentTrax"'
  'alt="CAF File Upload"'
  'alt="AE Inbox"'
  'alt="DBSA Lehigh Valley"'
  'alt="Moore Township Athletic Association"'
  'alt="Northern Lehigh Historical Society"'
  'alt="Travel Blog"'
  'alt="Photography Portfolio" />'
  'alt="Photography Portfolio"'
  'alt="Web Developer and Photographer Portfolio"'
  'alt="Web Design Portfolio"'
  'alt="Python Pandas"'
  'alt="Etch-A-Sketch"'
  'alt="Calculator"'
  'alt="Temperature Sensor"'
  'alt="Godcoin"'
  'alt="Time Alive"'
  'alt="Year Clock"'
  'alt="Meme Generator"'
  'alt="Covid Map"'
  'alt="Pool App"'
  'alt="To do list"'
  'alt="Timer"'
  'alt="Google Coder"'
  'alt="Blogpy"'
  'alt="Harvest Field"'
)

declare -a new_alts=(
  'alt="TuxTechRepair.org - Computer and electronics refurbishment non-profit"'
  'alt="Charles River Investment Management Solution software interface"'
  'alt="InvestmentTrax - Financial account management and reporting platform"'
  'alt="CAF File Upload - Government file archival and management system"'
  'alt="AE Inbox - Email management application for adverse event processing"'
  'alt="DBSA Lehigh Valley - Non-profit mental health organization website"'
  'alt="Moore Township Athletic Association - Sports organization content management system"'
  'alt="Northern Lehigh Historical Society - Historical preservation and heritage website"'
  'alt="Travel Blog - Journey documentation and travel experiences"'
  'alt="Photography Portfolio - Modern collection of travel and nature photography" />'
  'alt="Photography Portfolio - Archive of travel and landscape photography 2014-2016"'
  'alt="Web Developer and Photographer Portfolio - Showcase of web applications and photography"'
  'alt="Web Design Portfolio - Early web design projects and layouts 2012-2014"'
  'alt="Data Analysis - Investment correlation analysis using Python and Pandas"'
  'alt="Etch-A-Sketch - Interactive web-based colorful drawing application"'
  'alt="Calculator - Web-based arithmetic calculator application"'
  'alt="Temperature Sensor - Arduino-based temperature measurement hardware project"'
  'alt="Godcoin - Satirical cryptocurrency parody web application"'
  'alt="Time Alive - Personal age and time-elapsed calculator in weeks and days"'
  'alt="Year Clock - Visual representation of time progression throughout the year"'
  'alt="Meme Generator - Text overlay utility for creating memes from images"'
  'alt="Covid Map - Geographic visualization of COVID-19 severity data"'
  'alt="Pool App - Billiards game scoring application built with React"'
  'alt="To Do List - Task management application for organizing daily tasks"'
  'alt="Timer - Countdown and interval timer application"'
  'alt="Google Coder - Raspberry Pi setup guide for web development platform"'
  'alt="Blogpy - Static blog generator Raspberry Pi setup guide"'
  'alt="Harvest Field - Community recycling coordination web form platform"'
)

# Loop through and replace
for i in "${!old_alts[@]}"; do
  sed -i "s/${old_alts[$i]}/${new_alts[$i]}/g" index.html
done

echo "Updated alt text in index.html"
