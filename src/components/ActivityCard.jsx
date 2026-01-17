export default function ActivityCard({ activity }) {
    return (
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-bold mb-2">Activity</h3>
        <p>Active Months: {activity.active_months}</p>
        <p>Last Commit: {activity.last_commit_days_ago} days ago</p>
        <p>Activity Score: {activity.activity_score}/100</p>
      </div>
    );
  }
  