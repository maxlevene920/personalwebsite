# Project Assets

This folder contains assets (images and videos) for projects displayed in the portfolio.

## Folder Structure

```
public/projects/
├── seqsens/           # SeqSens project assets
│   ├── SeqSensphoto1.png
│   ├── SeqSensphoto2_summary.png
│   ├── SeqSensPhoto3_classification.png
│   └── SeqSensWinning.jpeg
├── task-management/   # Task Management App assets
├── weather-dashboard/ # Weather Dashboard assets
└── README.md         # This file
```

## Adding Assets

1. Create a folder for your project (use kebab-case naming)
2. Add your images/videos to the project folder
3. Update the project data in `src/components/Projects.tsx` to include the assets

## Supported Formats

- **Images**: JPG, PNG, GIF, WebP
- **Videos**: MP4, WebM, OGV

## File Naming

Use descriptive, lowercase names with hyphens:
- `team-photo.jpg`
- `dashboard-screenshot.png`
- `demo-video.mp4`

## Asset Configuration

In the project data, assets are configured like this:

```typescript
assets: [
  {
    id: 'unique-id',
    type: 'image' | 'video',
    url: '/projects/project-name/filename.ext',
    filename: 'filename.ext',
    description: 'Description of the asset',
    uploadedAt: new Date('YYYY-MM-DD')
  }
]
```

## Tips

- Keep file sizes reasonable for web performance
- Use descriptive filenames and descriptions
- Organize assets by project in separate folders
- Consider using WebP format for better compression
