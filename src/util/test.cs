static void DisplayIt<T, TItem, TCount>(TItem list, TCount count)
where T : IEnumerable<TItem>
// where TItem: IComparable<TItem>
where TCount : IComparable<TCount>
{
    int counter = 0;
    int end = (int)Convert.ChangeType(count, typeof(int));
    foreach (var item in list)
    {
        counter++;
        Console.WriteLine(item);
        if (counter >= end)
            break;
    }
}