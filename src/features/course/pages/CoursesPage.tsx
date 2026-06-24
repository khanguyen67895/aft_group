import { useCourses } from '../hooks/useCourse'
import { Spinner } from '@/components/common'

export function CoursesPage() {
  const { data, isLoading, isError } = useCourses()

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner size="lg" />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="text-center py-20 text-text-secondary">
        Failed to load courses. Please try again.
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-h3 text-text-primary">Courses</h1>

      {!data?.data.length ? (
        <p className="text-body-md text-text-secondary">No courses available yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.data.map(course => (
            <div
              key={course.id}
              className="bg-bg-card border border-divider rounded-xl overflow-hidden hover:border-primary transition-colors"
            >
              <div className="aspect-video bg-bg-card-2 flex items-center justify-center">
                {course.thumbnail ? (
                  <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-body-sm text-text-disable">No thumbnail</span>
                )}
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-h6 text-text-primary line-clamp-2">{course.title}</h3>
                <p className="text-body-sm text-text-secondary line-clamp-2">{course.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lead-lg text-primary font-semibold">${course.price}</span>
                  <span className="text-caption text-text-disable capitalize">{course.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
