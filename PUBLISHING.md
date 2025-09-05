# Publishing Guide

This guide explains how to publish new versions of the Faceit SDK to NPM and create GitHub releases.

## Prerequisites

1. **NPM Account**: You need an NPM account with publish permissions for the `faceit-sdk` package
2. **GitHub Repository**: Set up your GitHub repository with the proper secrets
3. **Git Tags**: The release process is triggered by Git tags

## Setup

### 1. NPM Authentication

Login to NPM locally:
```bash
npm login
```

### 2. GitHub Secrets

Add the following secret to your GitHub repository (Settings → Secrets → Actions):
- `NPM_TOKEN`: Your NPM automation token (get it from npmjs.com → Access Tokens)

### 3. Update Repository URLs

Update the repository URLs in `package.json`:
```json
{
  "repository": {
    "type": "git",
    "url": "git+https://github.com/YOUR_USERNAME/faceit-sdk.git"
  },
  "bugs": {
    "url": "https://github.com/YOUR_USERNAME/faceit-sdk/issues"
  },
  "homepage": "https://github.com/YOUR_USERNAME/faceit-sdk#readme"
}
```

## Publishing Process

### Automatic Release (Recommended)

Use the npm version scripts which will:
1. Update version in package.json
2. Build the project
3. Create a git commit and tag
4. Push to GitHub
5. Trigger GitHub Actions to create release and publish to NPM

#### Patch Release (1.0.0 → 1.0.1)
```bash
npm run release:patch
```

#### Minor Release (1.0.0 → 1.1.0)
```bash
npm run release:minor
```

#### Major Release (1.0.0 → 2.0.0)
```bash
npm run release:major
```

#### Pre-release (1.0.0 → 1.0.1-beta.0)
```bash
npm run release:prerelease
```

### Manual Release

If you need to publish manually:

1. Update version:
```bash
npm version patch  # or minor, major
```

2. Push tags:
```bash
git push && git push --tags
```

3. The GitHub Action will automatically:
   - Create a GitHub release with auto-generated notes
   - Publish the package to NPM

### Local NPM Publish (Emergency Only)

If GitHub Actions fail, you can publish directly:

```bash
npm run build
npm publish
```

## Version Guidelines

Follow [Semantic Versioning](https://semver.org/):

- **MAJOR** (x.0.0): Breaking API changes
- **MINOR** (1.x.0): New features, backwards compatible
- **PATCH** (1.0.x): Bug fixes, backwards compatible
- **PRE-RELEASE** (1.0.0-beta.x): Testing versions

## Pre-publish Checklist

Before releasing:

- [ ] All changes committed
- [ ] Tests pass (when implemented)
- [ ] README is up to date
- [ ] CHANGELOG updated (if maintaining one)
- [ ] Version bump makes sense (patch/minor/major)
- [ ] On main/master branch
- [ ] Branch is up to date with remote

## Troubleshooting

### GitHub Action Fails

1. Check GitHub Actions tab for error logs
2. Verify NPM_TOKEN secret is set correctly
3. Ensure package.json has correct metadata

### NPM Publish Fails

1. Check you're logged in: `npm whoami`
2. Verify package name is available
3. Check version doesn't already exist: `npm view faceit-sdk versions`

### Tag Already Exists

Delete the local and remote tag:
```bash
git tag -d v1.0.0
git push origin :refs/tags/v1.0.0
```

## Post-Release

After successful release:

1. Check NPM package: https://www.npmjs.com/package/faceit-sdk
2. Check GitHub releases: https://github.com/YOUR_USERNAME/faceit-sdk/releases
3. Test installation: `npm install faceit-sdk@latest`
4. Update any dependent projects