import React from 'react';
import { Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ApplicationTable = ({ applications, type, currentUser, onStatusUpdate }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved': return 'text-green-600 bg-green-100';
      case 'Rejected': return 'text-red-600 bg-red-100';
      case 'Under Review': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-blue-600 bg-blue-100';
    }
  };

  const renderLoanTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-4 font-medium text-slate-900">Applicant</th>
            <th className="text-left p-4 font-medium text-slate-900">Loan Type</th>
            <th className="text-left p-4 font-medium text-slate-900">Amount</th>
            <th className="text-left p-4 font-medium text-slate-900">Status</th>
            <th className="text-left p-4 font-medium text-slate-900">Date</th>
            <th className="text-left p-4 font-medium text-slate-900">Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id} className="border-b hover:bg-slate-50">
              <td className="p-4">
                <div>
                  <p className="font-medium text-slate-900">{app.fullName}</p>
                  <p className="text-sm text-slate-600">{app.email}</p>
                </div>
              </td>
              <td className="p-4 text-slate-600">{app.loanType}</td>
              <td className="p-4 text-slate-600">₹{app.loanAmount}</td>
              <td className="p-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                  {app.status}
                </span>
              </td>
              <td className="p-4 text-slate-600">
                {new Date(app.submittedAt).toLocaleDateString()}
              </td>
              <td className="p-4">
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => toast({ title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀" })}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  {currentUser.role === 'Admin' && (
                    <>
                      <Button
                        size="sm"
                        className="bg-green-500 hover:bg-green-600 text-white"
                        onClick={() => onStatusUpdate(app.id, 'Approved', 'loan')}
                      >
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => onStatusUpdate(app.id, 'Rejected', 'loan')}
                      >
                        Reject
                      </Button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderDSATable = () => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-4 font-medium text-slate-900">Name</th>
            <th className="text-left p-4 font-medium text-slate-900">Location</th>
            <th className="text-left p-4 font-medium text-slate-900">Experience</th>
            <th className="text-left p-4 font-medium text-slate-900">Status</th>
            <th className="text-left p-4 font-medium text-slate-900">Date</th>
            <th className="text-left p-4 font-medium text-slate-900">Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id} className="border-b hover:bg-slate-50">
              <td className="p-4">
                <div>
                  <p className="font-medium text-slate-900">{app.fullName}</p>
                  <p className="text-sm text-slate-600">{app.email}</p>
                </div>
              </td>
              <td className="p-4 text-slate-600">{app.city}, {app.state}</td>
              <td className="p-4 text-slate-600">{app.experience} years</td>
              <td className="p-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                  {app.status}
                </span>
              </td>
              <td className="p-4 text-slate-600">
                {new Date(app.submittedAt).toLocaleDateString()}
              </td>
              <td className="p-4">
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => toast({ title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀" })}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  {currentUser.role === 'Admin' && (
                    <>
                      <Button
                        size="sm"
                        className="bg-green-500 hover:bg-green-600 text-white"
                        onClick={() => onStatusUpdate(app.id, 'Approved', 'dsa')}
                      >
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => onStatusUpdate(app.id, 'Rejected', 'dsa')}
                      >
                        Reject
                      </Button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return type === 'loan' ? renderLoanTable() : renderDSATable();
};

export default ApplicationTable;