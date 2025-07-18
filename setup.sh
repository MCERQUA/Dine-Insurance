#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================"
echo -e "Astro Modular Template Setup (Unix/macOS)"
echo -e "========================================${NC}"
echo

# Check Node.js installation
echo -e "${BLUE}Checking Node.js installation...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${RED}ERROR: Node.js is not installed or not in PATH${NC}"
    echo -e "${RED}Please install Node.js from https://nodejs.org/${NC}"
    exit 1
fi

echo -e "${GREEN}Node.js version:${NC}"
node --version

echo

# Check npm installation
if ! command -v npm &> /dev/null; then
    echo -e "${RED}ERROR: npm is not installed${NC}"
    echo -e "${RED}Please install npm or use yarn/pnpm instead${NC}"
    exit 1
fi

echo -e "${BLUE}Installing dependencies...${NC}"
npm install

if [ $? -ne 0 ]; then
    echo -e "${RED}ERROR: Failed to install dependencies${NC}"
    exit 1
fi

echo
echo -e "${BLUE}Setting up environment variables...${NC}"
if [ ! -f .env ]; then
    cp .env.example .env
    echo -e "${GREEN}Created .env file from .env.example${NC}"
    echo -e "${YELLOW}Please edit .env file with your specific values${NC}"
else
    echo -e "${YELLOW}.env file already exists${NC}"
fi

echo
echo -e "${BLUE}Checking TypeScript configuration...${NC}"
npm run check

if [ $? -ne 0 ]; then
    echo -e "${YELLOW}WARNING: TypeScript check failed${NC}"
    echo -e "${YELLOW}This might be normal if you haven't added content yet${NC}"
fi

echo
echo -e "${GREEN}========================================"
echo -e "Setup completed successfully!"
echo -e "========================================${NC}"
echo
echo -e "${BLUE}Next steps:${NC}"
echo "1. Edit .env file with your site information"
echo "2. Update src/components/componentRegistry.ts"
echo "3. Customize colors in tailwind.config.mjs"
echo "4. Start development server: npm run dev"
echo
echo -e "${YELLOW}Component Registry Reminder:${NC}"
echo -e "${YELLOW}ALWAYS check src/components/componentRegistry.ts${NC}"
echo -e "${YELLOW}before creating new components!${NC}"
echo

# Make the script executable for future use
chmod +x setup.sh

echo -e "${GREEN}Setup script is now executable${NC}"
echo -e "${BLUE}You can run it again with: ./setup.sh${NC}"
